import Auth from './Auth'
import PetController from './PetController'
import SocialMediaPostController from './SocialMediaPostController'
import ClientController from './ClientController'
import ProjectController from './ProjectController'
import TaskController from './TaskController'
import TimeEntryController from './TimeEntryController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
PetController: Object.assign(PetController, PetController),
SocialMediaPostController: Object.assign(SocialMediaPostController, SocialMediaPostController),
ClientController: Object.assign(ClientController, ClientController),
ProjectController: Object.assign(ProjectController, ProjectController),
TaskController: Object.assign(TaskController, TaskController),
TimeEntryController: Object.assign(TimeEntryController, TimeEntryController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers