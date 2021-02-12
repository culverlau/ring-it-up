import createActivity from './createActivity';
import deleteActivity from './deleteActivity';
import getActivityById from './getActivityById';
import listActivitys from './listActivitys';
import updateActivity from './updateActivity';
import Activity from './Activity';

type AppSyncEvent = {
   info: {
     fieldName: string
  },
   arguments: {
    postId: string,
     post: Activity
  },
  identity: {
    sub : string;
    username : string;
  }
}

exports.handler = async (event:AppSyncEvent) => {
    const username = event.identity?.username;
    switch (event.info.fieldName) {
        case "getActivityById":
            return await getActivityById(event.arguments.postId);
        case "createActivity":
            return await createActivity({ ...event.arguments.post, username });
        case "listActivities":
            return await listActivities();
        case "deleteActivity":
            return await deleteActivity(event.arguments.postId, username);
        case "updateActivity":
            return await updateActivity(event.arguments.post, username);
        default:
            return null;
    }
}
