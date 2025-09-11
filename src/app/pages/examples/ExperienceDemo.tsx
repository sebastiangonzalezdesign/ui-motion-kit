// Experience System Demo
// This shows how components adapt based on user context

import React, { useState } from 'react';
import { ExperienceProvider } from '../../../utils/experience-context';
import type { UserContext, ExperienceSystemConfig } from '../../../utils/experience-context';
import {
  SmartButton,
  ConfirmationFlow,
} from '../../../components/primitives/SmartButton/SmartButton';

const ExperienceDemo: React.FC = () => {
  const [userContext, setUserContext] = useState<Partial<UserContext>>({
    userType: 'first-time',
    device: 'desktop',
    accessibilityNeeds: {
      reducedMotion: false,
      highContrast: false,
      screenReader: false,
      largeFonts: false,
    },
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const experienceConfig: ExperienceSystemConfig = {
    adaptationRules: [
      {
        condition: (context) => context.userType === 'first-time',
        adaptations: [
          {
            componentType: 'button',
            adaptations: {
              guidance: 'show-hints',
              complexity: 'simplified',
            },
          },
        ],
      },
    ],
    enableUsageTracking: true,
    enableAutomaticAdaptation: true,
    enablePredictiveLoading: false,
    enableSmartBatching: false,
  };

  return (
    <ExperienceProvider config={experienceConfig} initialContext={userContext}>
      <div style={{ padding: '20px', maxWidth: '800px' }}>
        <h1>🧠 Experience System Demo</h1>

        <div
          style={{
            marginBottom: '30px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        >
          <h3>Current User Context</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '10px',
            }}
          >
            <label>
              User Type:
              <select
                value={userContext.userType}
                onChange={(e) =>
                  setUserContext((prev) => ({
                    ...prev,
                    userType: e.target.value as 'first-time' | 'returning' | 'power-user',
                  }))
                }
              >
                <option value="first-time">First Time</option>
                <option value="returning">Returning</option>
                <option value="power-user">Power User</option>
              </select>
            </label>

            <label>
              Device:
              <select
                value={userContext.device}
                onChange={(e) =>
                  setUserContext((prev) => ({
                    ...prev,
                    device: e.target.value as 'mobile' | 'tablet' | 'desktop',
                  }))
                }
              >
                <option value="mobile">Mobile</option>
                <option value="tablet">Tablet</option>
                <option value="desktop">Desktop</option>
              </select>
            </label>

            <label>
              <input
                type="checkbox"
                checked={userContext.accessibilityNeeds?.reducedMotion}
                onChange={(e) =>
                  setUserContext((prev) => ({
                    ...prev,
                    accessibilityNeeds: {
                      ...prev.accessibilityNeeds!,
                      reducedMotion: e.target.checked,
                    },
                  }))
                }
              />
              Reduced Motion
            </label>

            <label>
              <input
                type="checkbox"
                checked={userContext.accessibilityNeeds?.largeFonts}
                onChange={(e) =>
                  setUserContext((prev) => ({
                    ...prev,
                    accessibilityNeeds: {
                      ...prev.accessibilityNeeds!,
                      largeFonts: e.target.checked,
                    },
                  }))
                }
              />
              Large Fonts
            </label>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3>🎯 Smart Buttons (Context-Aware)</h3>
          <p>These buttons automatically adapt based on the user context above:</p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <SmartButton
              intent="primary-action"
              criticality="high"
              onInteraction={(type, metadata) => {
                console.log(`🔄 ${type} interaction:`, metadata);
              }}
            >
              Save Document
            </SmartButton>

            <SmartButton intent="navigation" criticality="low" userJourneyStage="discovery">
              Learn More
            </SmartButton>

            <SmartButton
              intent="destructive"
              criticality="critical"
              onInteraction={(type, metadata) => {
                console.log(`⚠️ Destructive ${type}:`, metadata);
                if (type === 'click') {
                  setShowConfirmation(true);
                }
              }}
            >
              Delete Account
            </SmartButton>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '6px' }}>
            <strong>Adaptive Behaviors Active:</strong>
            <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
              {userContext.device === 'mobile' && <li>🔘 Mobile-optimized button sizes</li>}
              {userContext.userType === 'first-time' && (
                <li>🎯 Prominent primary actions for new users</li>
              )}
              {userContext.accessibilityNeeds?.largeFonts && (
                <li>📏 Larger button sizes for accessibility</li>
              )}
              {userContext.accessibilityNeeds?.reducedMotion && <li>🔇 Reduced animations</li>}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3>🔄 Compound Components (Workflow-Aware)</h3>
          <p>These components understand user intent and context within workflows:</p>

          {!showConfirmation ? (
            <SmartButton variant="outline" onClick={() => setShowConfirmation(true)}>
              Show Confirmation Flow
            </SmartButton>
          ) : (
            <div
              style={{
                padding: '20px',
                border: '2px solid #ff6b6b',
                borderRadius: '8px',
                backgroundColor: '#fff5f5',
              }}
            >
              <h4>⚠️ Are you sure you want to delete your account?</h4>
              <p>This action cannot be undone. All your data will be permanently deleted.</p>

              <ConfirmationFlow
                onConfirm={() => {
                  alert('Account deletion confirmed (demo)');
                  setShowConfirmation(false);
                }}
                onCancel={() => setShowConfirmation(false)}
                confirmText="Yes, Delete Account"
                cancelText="Keep My Account"
                isDestructive={true}
              />
            </div>
          )}
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3>📊 Experience System Benefits</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px',
            }}
          >
            <div style={{ padding: '15px', border: '1px solid #4caf50', borderRadius: '6px' }}>
              <strong>🎯 Intent-Driven</strong>
              <p>
                Components understand <em>why</em> they're being used, not just <em>how</em>.
              </p>
            </div>

            <div style={{ padding: '15px', border: '1px solid #2196f3', borderRadius: '6px' }}>
              <strong>🧠 Context-Aware</strong>
              <p>Adapts to user type, device, accessibility needs, and journey stage.</p>
            </div>

            <div style={{ padding: '15px', border: '1px solid #ff9800', borderRadius: '6px' }}>
              <strong>📈 Learning System</strong>
              <p>Tracks usage patterns and improves over time.</p>
            </div>

            <div style={{ padding: '15px', border: '1px solid #9c27b0', borderRadius: '6px' }}>
              <strong>🔮 Predictive</strong>
              <p>Anticipates user needs and prevents common mistakes.</p>
            </div>
          </div>
        </div>

        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h4>🔍 Open Developer Console</h4>
          <p>Click buttons above to see interaction tracking and metadata in the console.</p>
          <p>Notice how button behavior changes when you modify the user context!</p>
        </div>
      </div>
    </ExperienceProvider>
  );
};

export default ExperienceDemo;
