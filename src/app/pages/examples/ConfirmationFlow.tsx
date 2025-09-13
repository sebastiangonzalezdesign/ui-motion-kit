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
  StarIcon,
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
        title="Adaptive Confirmation - Account Deletion"
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
                    variant="outline"
                    size="sm"
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
                    variant="outline"
                    size="sm"
                    onClick={() => setDeleteAccountModal(false)}
                  >
                    Keep Account
                  </SmartButton>
                </div>
              </div>
            </Modal>
          </>
        }
        code={`// Complete Adaptive Confirmation Flow
import { useState } from 'react';
import { SmartButton } from '../../../components/primitives';
import { Modal } from '../../../components/feedback';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function AdaptiveConfirmation() {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div>
      {/* Trigger Button with Experience System Props */}
      <SmartButton
        intent="destructive"
        criticality="critical"
        flowPosition="confirmation"
        userJourneyStage="usage"
        onClick={() => setDeleteModal(true)}
      >
        Delete Account
      </SmartButton>

      {/* Adaptive Modal with Smart Buttons */}
      <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
        <div className="modal-content-center">
          <ExclamationTriangleIcon className="warning-icon" />
          <h2 className="modal-title">Delete Account Permanently?</h2>
          <p className="modal-description">
            This action cannot be undone. All your data, projects, and settings 
            will be permanently deleted.
          </p>
          
          {/* Smart Checklist - Adapts based on user type */}
          <div className="confirmation-checklist">
            <div className="checklist-item">✓ Download any important data first</div>
            <div className="checklist-item">✓ Cancel any active subscriptions</div>
            <div className="checklist-item">✓ Notify team members if applicable</div>
          </div>
          
          {/* Adaptive Action Buttons */}
          <div className="modal-actions">
            <SmartButton
              intent="destructive"
              criticality="critical"
              flowPosition="confirmation"
              variant="outline"
              size="sm"
              onClick={() => {
                setDeleteModal(false);
                // Handle deletion logic
              }}
            >
              Yes, Delete Everything
            </SmartButton>
            <SmartButton
              intent="secondary-action"
              criticality="low"
              variant="outline"
              size="sm"
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

/* Experience System Features:
 * - Buttons adapt based on user expertise level
 * - Critical actions get enhanced confirmation flows
 * - New users see more guidance and safeguards
 * - Experienced users get streamlined interactions
 * - Context-aware button styling and behavior
 */`}
      />

      <CodePreview
        title="Context-Aware Confirmations"
        preview={
          <div className="space-y-6">
            <div>
              <h4 className="mb-4">File Operations</h4>
              <div className="flex gap-4 flex-wrap">
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
              <h4 className="mb-4">User Management</h4>
              <div className="flex gap-4 flex-wrap">
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
        code={`// Context-Aware Confirmations with Multiple Actions
import { useState } from 'react';
import { SmartButton } from '../../../components/primitives';
import { Modal } from '../../../components/feedback';
import { TrashIcon, UserMinusIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export default function ContextAwareConfirmations() {
  const [deleteFileModal, setDeleteFileModal] = useState(false);
  const [removeUserModal, setRemoveUserModal] = useState(false);
  const [cancelSubscriptionModal, setCancelSubscriptionModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* File Operations - Medium Criticality */}
      <div>
        <h4>File Operations</h4>
        <div className="flex gap-4 flex-wrap">
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

      {/* User Management - High Criticality */}
      <div>
        <h4>User Management</h4>
        <div className="flex gap-4 flex-wrap">
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

      {/* Adaptive Modals */}
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
              size="sm"
              onClick={() => setDeleteFileModal(false)}
            >
              Move to Trash
            </SmartButton>
            <SmartButton
              intent="secondary-action"
              variant="outline"
              size="sm"
              onClick={() => setDeleteFileModal(false)}
            >
              Cancel
            </SmartButton>
          </div>
        </div>
      </Modal>

      {/* Additional modals for removeUserModal and cancelSubscriptionModal... */}
    </div>
  );
}

/* Smart Features:
 * - Criticality levels determine confirmation complexity
 * - Icons and messaging adapt to action context
 * - Button variants automatically adjust based on intent
 * - User journey stage influences interaction patterns
 */`}
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
              size="sm"
              onClick={() => setDeleteFileModal(false)}
            >
              Move to Trash
            </SmartButton>
            <SmartButton
              intent="secondary-action"
              variant="outline"
              size="sm"
              onClick={() => setDeleteFileModal(false)}
            >
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
              size="sm"
              onClick={() => setRemoveUserModal(false)}
            >
              Remove Access
            </SmartButton>
            <SmartButton
              intent="secondary-action"
              variant="outline"
              size="sm"
              onClick={() => setRemoveUserModal(false)}
            >
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
              size="sm"
              onClick={() => setCancelSubscriptionModal(false)}
            >
              Cancel Subscription
            </SmartButton>
            <SmartButton
              intent="secondary-action"
              variant="outline"
              size="sm"
              onClick={() => setCancelSubscriptionModal(false)}
            >
              Keep Subscription
            </SmartButton>
          </div>
        </div>
      </Modal>

      <Card className="card--highlight">
        <h3
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.75rem 0' }}
        >
          <StarIcon
            style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent-primary)' }}
          />
          Experience System Intelligence
        </h3>
        <p style={{ margin: '0 0 1rem 0', color: 'var(--color-text-secondary)' }}>
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
