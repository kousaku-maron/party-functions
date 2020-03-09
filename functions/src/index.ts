import * as admin from 'firebase-admin'
admin.initializeApp()

export { updateUserID } from './handlers/user'
export { createUser } from './triggers/user'

export { entryParty } from './handlers/party'

export { createApplyCard, deleteApplyCard } from './triggers/applyCard'

export { updateRoomHash, updateNewMessage } from './triggers/room'

export { updateMessageUser } from './triggers/message'

export { applyFriend, acceptFriend, refuseFriend } from './handlers/friend'

export { reportUser } from './handlers/reports'

export { blockUser } from './handlers/block'

export { recommendApplyCards } from './handlers/applyCards'
