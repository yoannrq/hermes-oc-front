import { Box, Button } from '@mui/material';
import { Delete, Edit, Check, Clear } from '@mui/icons-material';

interface EditToolbarEvents {
  onModifyButtonClick?: () => void;
  onDeleteButtonClick?: () => void;
}

function DefaultButtons({
  onModifyButtonClick,
  onDeleteButtonClick,
}: EditToolbarEvents) {
  return (
    <>
      <Button
        onClick={onModifyButtonClick ? onModifyButtonClick : undefined}
        variant="text"
        sx={{
          minWidth: 0,
          padding: 0,
        }}
      >
        <Edit />
      </Button>
      <Button
        onClick={onDeleteButtonClick ? onDeleteButtonClick : undefined}
        variant="text"
        sx={{
          minWidth: 0,
          padding: 0,
        }}
      >
        <Delete />
      </Button>
    </>
  );
}

interface ValidationToolbarEvents {
  onCancel?: () => void;
  onValidate?: () => void;
}

function ValidationButtons({ onValidate, onCancel }: ValidationToolbarEvents) {
  return (
    <>
      <Button
        onClick={onValidate ? onValidate : undefined}
        variant="text"
        sx={{
          minWidth: 0,
          padding: 0,
        }}
      >
        <Check />
      </Button>
      <Button
        onClick={onCancel ? onCancel : undefined}
        variant="text"
        sx={{
          minWidth: 0,
          padding: 0,
        }}
      >
        <Clear />
      </Button>
    </>
  );
}

export enum EditState {
  Editing = 'editing',
  Default = 'default',
}

export interface ToolbarProps extends EditToolbarEvents {
  isDisplayed: boolean;
  editState: EditState;

  onCancelModification?: () => void;
  onValidateModification?: () => void;
}

export default function Toolbar({
  isDisplayed,
  editState,
  onCancelModification,
  onDeleteButtonClick,
  onModifyButtonClick,
  onValidateModification,
}: ToolbarProps) {
  if (!isDisplayed) {
    return <></>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '.5em',
      }}
    >
      {editState === EditState.Editing && (
        <ValidationButtons
          onCancel={onCancelModification}
          onValidate={onValidateModification}
        />
      )}
      {editState === EditState.Default && (
        <DefaultButtons
          onModifyButtonClick={onModifyButtonClick}
          onDeleteButtonClick={onDeleteButtonClick}
        />
      )}
    </Box>
  );
}
