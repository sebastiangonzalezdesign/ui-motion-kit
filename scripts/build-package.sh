#!/bin/bash

# Motion UI Kit Pro - Gumroad Package Builder
# This script creates a clean, production-ready zip file for distribution

echo "🚀 Building Motion UI Kit Pro package for Gumroad..."

# Create temporary directory for the package
TEMP_DIR="motion-ui-kit-pro-package"
PACKAGE_NAME="motion-ui-kit-pro-v1.0.0"

# Remove existing temp directory if it exists
rm -rf $TEMP_DIR
mkdir -p $TEMP_DIR/$PACKAGE_NAME

echo "📦 Copying essential files..."

# Copy core source code
cp -r src/ $TEMP_DIR/$PACKAGE_NAME/
cp -r .storybook/ $TEMP_DIR/$PACKAGE_NAME/
cp -r public/ $TEMP_DIR/$PACKAGE_NAME/

# Copy configuration files
cp package.json $TEMP_DIR/$PACKAGE_NAME/
cp tsconfig*.json $TEMP_DIR/$PACKAGE_NAME/
cp vite.config.ts $TEMP_DIR/$PACKAGE_NAME/
cp vitest.config.ts $TEMP_DIR/$PACKAGE_NAME/
cp vitest.setup.ts $TEMP_DIR/$PACKAGE_NAME/
cp eslint.config.js $TEMP_DIR/$PACKAGE_NAME/
cp index.html $TEMP_DIR/$PACKAGE_NAME/

# Copy documentation
cp README.md $TEMP_DIR/$PACKAGE_NAME/
cp CONTRIBUTING.md $TEMP_DIR/$PACKAGE_NAME/
cp LICENSE $TEMP_DIR/$PACKAGE_NAME/

# Copy Gumroad-specific documentation
cp gumroad-docs/INSTALLATION.md $TEMP_DIR/$PACKAGE_NAME/
cp gumroad-docs/QUICK_START.md $TEMP_DIR/$PACKAGE_NAME/
cp gumroad-docs/COMPONENTS.md $TEMP_DIR/$PACKAGE_NAME/
cp gumroad-docs/DESIGN_TOKENS.md $TEMP_DIR/$PACKAGE_NAME/

echo "🧹 Cleaning up unnecessary files..."

# Remove development files
rm -rf $TEMP_DIR/$PACKAGE_NAME/node_modules
rm -rf $TEMP_DIR/$PACKAGE_NAME/.git
rm -rf $TEMP_DIR/$PACKAGE_NAME/dist
rm -rf $TEMP_DIR/$PACKAGE_NAME/storybook-static
rm -f $TEMP_DIR/$PACKAGE_NAME/.env*
rm -f $TEMP_DIR/$PACKAGE_NAME/.gitignore
rm -f $TEMP_DIR/$PACKAGE_NAME/vercel.json

echo "📝 Creating package-specific files..."

# Create a package-specific README
cat > $TEMP_DIR/$PACKAGE_NAME/README_FIRST.md << 'EOF'
# 🚀 Welcome to Motion UI Kit Pro!

Thank you for your purchase! 🎉

## ⚡ Quick Start (2 minutes)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   # → Opens http://localhost:5173
   ```

3. **Explore components:**
   ```bash
   npm run storybook
   # → Opens http://localhost:6006
   ```

## 📚 Documentation

- **QUICK_START.md** - 2-minute setup guide
- **COMPONENTS.md** - Complete component API reference
- **DESIGN_TOKENS.md** - Design system documentation
- **INSTALLATION.md** - Detailed installation options

## 🎯 What's Included

- ✅ **Complete React Components** - Button, Card, Modal, Toggle, Input, Tabs, and more
- ✅ **SCSS Design System** - Professional color scales, typography, spacing tokens
- ✅ **Storybook Playground** - Interactive component documentation
- ✅ **TypeScript Support** - Full type definitions and IntelliSense
- ✅ **Theme System** - Light/dark mode with easy customization
- ✅ **Motion System** - Framer Motion animations with accessibility support

## 🛠️ Support

- 📖 **Documentation**: Check the included guides and Storybook
- 🐛 **Issues**: Email support@sebastiangonzalez.design
- 💬 **Community**: Join our Discord for tips and updates

---

**🎉 Ready to build? Run `npm install && npm run dev` to get started!**
EOF

# Create a simple .gitignore for the package
cat > $TEMP_DIR/$PACKAGE_NAME/.gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
storybook-static/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs/
*.log
EOF

echo "📦 Creating zip package..."

# Create the zip file
cd $TEMP_DIR
zip -r "../${PACKAGE_NAME}.zip" $PACKAGE_NAME/ -x "*.DS_Store" "*/node_modules/*" "*/.git/*"
cd ..

# Get package size
PACKAGE_SIZE=$(du -h "${PACKAGE_NAME}.zip" | cut -f1)

echo "✅ Package created successfully!"
echo ""
echo "📦 Package: ${PACKAGE_NAME}.zip"
echo "📏 Size: $PACKAGE_SIZE"
echo "📍 Location: $(pwd)/${PACKAGE_NAME}.zip"
echo ""
echo "🎯 Ready for Gumroad upload!"

# Clean up temp directory
rm -rf $TEMP_DIR

echo ""
echo "📋 Package Contents:"
echo "├── src/                    # Complete React components"
echo "├── .storybook/            # Interactive playground"
echo "├── public/                # Static assets"
echo "├── package.json           # Dependencies & scripts"
echo "├── README_FIRST.md        # Start here guide"
echo "├── QUICK_START.md         # 2-minute setup"
echo "├── COMPONENTS.md          # API reference"
echo "├── DESIGN_TOKENS.md       # Design system guide"
echo "├── INSTALLATION.md        # Detailed setup options"
echo "└── All config files       # TypeScript, Vite, ESLint"
echo ""
echo "🚀 Your customers can immediately run 'npm install && npm run dev'!"
