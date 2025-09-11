import { useState } from 'react';
import { SmartButton } from '../../../components/primitives';
import { Modal } from '../../../components/feedback';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import { CodePreview } from '../../components';
import {
  ExclamationTriangleIcon,
  TrashIcon,
  UserMinusIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';

const ConfirmationFlow = () => {
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);
  const [deleteFileModal, setDeleteFileModal] = useState(false);
  const [removeUserModal, setRemoveUserModal] = useState(false);
  const [cancelSubscriptionModal, setCancelSubscriptionModal] = useState(false);

  return (
    <div className="page">
      <Breadcrumb />
      <Hero
        headline="Confirmation Flow Examples"
        description="Intelligent confirmation dialogs that adapt based on user expertise and action criticality using the Experience System."
        backgroundColor="brand-medium"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <CodePreview
        title="🧠 Adaptive Confirmation - Account Deletion"
        preview={
          <>
            <SmartButton
              intent="destructive"
              criticality="critical"
              flowPosition="confirmation"
              userJourneyStage="usage"
              onClick={() => setDeleteAccountModal(true)}
            >
              Delete Account
            </SmartButton>

            <Modal isOpen={deleteAccountModal} onClose={() => setDeleteAccountModal(false)}>
              <div className="modal-content-center">
                <ExclamationTriangleIcon className="warning-icon" />
                <h2 className="modal-title">Delete Account Permanently?</h2>
                <p className="modal-description">
                  This action cannot be undone. All your data, projects, and settings will be
                  permanently deleted.
                </p>
                <div className="confirmation-checklist">
                  <div className="checklist-item">✓ Download any important data first</div>
                  <div className="checklist-item">✓ Cancel any active subscriptions</div>
                  <div className="checklist-item">✓ Notify team members if applicable</div>
                </div>
                <div className="modal-actions">
                  <SmartButton
                    intent="destructive"
                    criticality="critical"
                    flowPosition="confirmation"
                    onClick={() => {
                      setDeleteAccountModal(false);
                      // Handle deletion
                    }}
                  >
                    Yes, Delete Everything
                  </SmartButton>
                  <SmartButton
                    intent="secondary-action"
                    criticality="low"
                    onClick={() => setDeleteAccountModal(false)}
                  >
                    Keep Account
                  </SmartButton>
                </div>
              </div>
            </Modal>
          </>
        }
        code={`// AdaptiveConfirmation.jsx
import { useState } from 'react';
import { SmartButton } from '../../../components/primitives';
import { Modal } from '../../../components/feedback';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function AdaptiveConfirmation() {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div>
      <SmartButton
        intent="destructive"
        criticality="critical"
        flowPosition="confirmation"
        userJourneyStage="usage"
        onClick={() => setDeleteModal(true)}
      >
        Delete Account
      </SmartButton>

      <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
        <div className="modal-content-center">
          <ExclamationTriangleIcon className="warning-icon" />
          <h2 className="modal-title">Delete Account Permanently?</h2>
          <p className="modal-description">
            This action cannot be undone. All your data will be permanently deleted.
          </p>
          
          <div className="confirmation-checklist">
            <div className="checklist-item">✓ Download any important data first</div>
            <div className="checklist-item">✓ Cancel any active subscriptions</div>
            <div className="checklist-item">✓ Notify team members if applicable</div>
          </div>
          
          <div className="modal-actions">
            <SmartButton
              intent="destructive"
              criticality="critical"
              flowPosition="confirmation"
              onClick={() => setDeleteModal(false)}
            >
              Yes, Delete Everything
            </SmartButton>
            <SmartButton
              intent="secondary-action"
              criticality="low"
              onClick={() => setDeleteModal(false)}
            >
              Keep Account
            </SmartButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}
`}
      />

      <CodePreview
        title="📝 Context-Aware Confirmations"
        preview={
          <div className="grid grid-2">
            <div>
              <h4>File Operations</h4>
              <div className="space-y-3">
                <SmartButton
                  intent="destructive"
                  criticality="medium"
                  userJourneyStage="usage"
                  onClick={() => setDeleteFileModal(true)}
                >
                  <TrashIcon width="16" height="16" style={{ marginRight: '8px' }} />
                  Delete File
                </SmartButton>
              </div>
            </div>
            <div>
              <h4>User Management</h4>
              <div className="space-y-3">
                <SmartButton
                  intent="destructive"
                  criticality="high"
                  flowPosition="middle"
                  onClick={() => setRemoveUserModal(true)}
                >
                  <UserMinusIcon width="16" height="16" style={{ marginRight: '8px' }} />
                  Remove User
                </SmartButton>
                <SmartButton
                  intent="destructive"
                  criticality="high"
                  userJourneyStage="evaluation"
                  onClick={() => setCancelSubscriptionModal(true)}
                >
                  <CreditCardIcon width="16" height="16" style={{ marginRight: '8px' }} />
                  Cancel Subscription
                </SmartButton>
              </div>
            </div>
          </div>
        }
        code={`// ContextAwareConfirmations.jsx
import { SmartButton } from '../../../components/primitives';
import { TrashIcon, UserMinusIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export default function ContextAwareConfirmations() {
  return (
    <div className="grid grid-2">
      <div>
        <h4>File Operations</h4>
        <SmartButton
          intent="destructive"
          criticality="medium"
          userJourneyStage="usage"
          onClick={() => console.log('Delete file')}
        >
          <TrashIcon width="16" height="16" />
          Delete File
        </SmartButton>
      </div>
      
      <div>
        <h4>User Management</h4>
        <SmartButton
          intent="destructive"
          criticality="high"
          flowPosition="middle"
          onClick={() => console.log('Remove user')}
        >
          <UserMinusIcon width="16" height="16" />
          Remove User
        </SmartButton>
        
        <SmartButton
          intent="destructive"
          criticality="high"
          userJourneyStage="evaluation"
          onClick={() => console.log('Cancel subscription')}
        >
          <CreditCardIcon width="16" height="16" />
          Cancel Subscription
        </SmartButton>
      </div>
    </div>
  );
}
`}
      />

      {/* Simple modals for other examples */}
      <Modal isOpen={deleteFileModal} onClose={() => setDeleteFileModal(false)}>
        <div className="modal-content-center">
          <TrashIcon className="warning-icon" />
          <h2 className="modal-title">Delete File?</h2>
          <p className="modal-description">
            This file will be moved to trash. You can restore it later if needed.
          </p>
          <div className="modal-actions">
            <SmartButton
              intent="destructive"
              criticality="medium"
              onClick={() => setDeleteFileModal(false)}
            >
              Move to Trash
            </SmartButton>
            <SmartButton intent="secondary-action" onClick={() => setDeleteFileModal(false)}>
              Cancel
            </SmartButton>
          </div>
        </div>
      </Modal>

      <Modal isOpen={removeUserModal} onClose={() => setRemoveUserModal(false)}>
        <div className="modal-content-center">
          <UserMinusIcon className="warning-icon" />
          <h2 className="modal-title">Remove User Access?</h2>
          <p className="modal-description">
            This user will lose access to the project but their data will be preserved.
          </p>
          <div className="modal-actions">
            <SmartButton
              intent="destructive"
              criticality="high"
              onClick={() => setRemoveUserModal(false)}
            >
              Remove Access
            </SmartButton>
            <SmartButton intent="secondary-action" onClick={() => setRemoveUserModal(false)}>
              Cancel
            </SmartButton>
          </div>
        </div>
      </Modal>

      <Modal isOpen={cancelSubscriptionModal} onClose={() => setCancelSubscriptionModal(false)}>
        <div className="modal-content-center">
          <CreditCardIcon className="warning-icon" />
          <h2 className="modal-title">Cancel Subscription?</h2>
          <p className="modal-description">
            Your subscription will end at the current billing period. You'll keep access until then.
          </p>
          <div className="modal-actions">
            <SmartButton
              intent="destructive"
              criticality="high"
              onClick={() => setCancelSubscriptionModal(false)}
            >
              Cancel Subscription
            </SmartButton>
            <SmartButton
              intent="secondary-action"
              onClick={() => setCancelSubscriptionModal(false)}
            >
              Keep Subscription
            </SmartButton>
          </div>
        </div>
      </Modal>

      <Card className="card--highlight">
        <h3>🧠 Experience System Intelligence</h3>
        <p>
          These confirmation flows adapt based on user expertise, action criticality, and context.
          New users get more guidance and safeguards, while experienced users get streamlined flows.
        </p>
        <div className="pro-features">
          <div className="pro-feature">
            <strong>Adaptive Complexity:</strong> More guidance for new users, streamlined for
            experts
          </div>
          <div className="pro-feature">
            <strong>Context Awareness:</strong> Different confirmations based on action criticality
          </div>
          <div className="pro-feature">
            <strong>Learning System:</strong> Adapts to user patterns over time
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ConfirmationFlow;
