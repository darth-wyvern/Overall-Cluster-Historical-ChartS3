import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faGear, faCircle } from '@fortawesome/free-solid-svg-icons'

export default function loadIcon() {
  library.add(faBell, faGear, faCircle);
}