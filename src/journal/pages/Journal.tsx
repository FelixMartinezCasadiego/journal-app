import { JournalLayout } from "../layout/JournalLayout";

import { NoteView } from "../views";

export const Journal = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  );
};
