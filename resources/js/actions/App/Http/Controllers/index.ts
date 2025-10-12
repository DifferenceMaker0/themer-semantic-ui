import Auth from './Auth'
import PetController from './PetController'
import SettingsController from './SettingsController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
PetController: Object.assign(PetController, PetController),
SettingsController: Object.assign(SettingsController, SettingsController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers