import React, { useState } from 'react';
import { Pause, Play, AlertCircle } from 'lucide-react';
import { StatusIndicator } from '../ui/StatusIndicator';
import { Button } from '../ui/Button';
import { Toggle } from '../ui/Toggle';
import { Modal } from '../ui/Modal';
import { useAppStore } from '../../store/useAppStore';

export const TopBar: React.FC = () => {
  const { isPaused, humanOverride, aiStatus, setPaused, setHumanOverride } = useAppStore();
  const [showPauseModal, setShowPauseModal] = useState(false);
  const [showOverrideModal, setShowOverrideModal] = useState(false);

  const handlePauseToggle = () => {
    setShowPauseModal(true);
  };

  const confirmPause = () => {
    setPaused(!isPaused);
    setShowPauseModal(false);
  };

  const handleOverrideToggle = (checked: boolean) => {
    if (checked) {
      setShowOverrideModal(true);
    } else {
      setHumanOverride(false);
    }
  };

  const confirmOverride = () => {
    setHumanOverride(true);
    setShowOverrideModal(false);
  };

  return (
    <>
      <div className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <StatusIndicator status={aiStatus} size="md" />

          {aiStatus === 'disconnected' && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle size={16} />
              <span>Connection lost - check your network</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-neutral-700">Human Override</span>
            <Toggle
              checked={humanOverride}
              onChange={handleOverrideToggle}
            />
          </div>

          <Button
            variant={isPaused ? 'secondary' : 'danger'}
            size="md"
            onClick={handlePauseToggle}
            className="min-w-[140px]"
          >
            {isPaused ? (
              <>
                <Play size={16} className="inline mr-2" />
                Resume
              </>
            ) : (
              <>
                <Pause size={16} className="inline mr-2" />
                Pause
              </>
            )}
          </Button>
        </div>
      </div>

      <Modal
        isOpen={showPauseModal}
        onClose={() => setShowPauseModal(false)}
        title={isPaused ? 'Resume Automation?' : 'Pause Automation?'}
        onConfirm={confirmPause}
        confirmText={isPaused ? 'Resume' : 'Pause'}
        confirmVariant={isPaused ? 'primary' : 'danger'}
      >
        {isPaused ? (
          <p>The AI automation will resume processing messages and sending automated replies.</p>
        ) : (
          <p>
            This will stop all automated responses. You'll need to manually handle all incoming
            messages until you resume automation.
          </p>
        )}
      </Modal>

      <Modal
        isOpen={showOverrideModal}
        onClose={() => setShowOverrideModal(false)}
        title="Enable Human Override?"
        onConfirm={confirmOverride}
        confirmText="Enable"
        confirmVariant="danger"
      >
        <p>
          Human Override mode requires manual approval for all AI actions. This provides maximum
          control but requires constant monitoring.
        </p>
      </Modal>
    </>
  );
};
