import createActivity from './createActivity';
import deleteActivity from './deleteActivity';
import getActivityById from './getActivityById';
import listActivitiess from './listActivities';
import updateActivity from './updateActivity';
import Activity from './Activity';

type AppSyncEvent = {
   info: {
     fieldName: string
  },
   arguments: {
    activityId: string,
     activity: Activity
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
            return await getActivityById(event.arguments.activityId);
        case "createActivity":
            return await createActivity({ ...event.arguments.activity, username });
        case "listActivities":
            return await listActivities();
        case "deleteActivity":
            return await deleteActivity(event.arguments.activityId, username);
        case "updateActivity":
            return await updateActivity(event.arguments.activity, username);
        default:
            return null;
    }
}
