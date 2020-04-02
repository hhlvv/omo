<template>
  <div>
    <ul>
      <li><font-awesome-icon :icon="faQuestionCircle" />｜</li>
      <li><font-awesome-icon :icon="faMapMarkerAlt" />｜</li>
      <li><font-awesome-icon :icon="faUser" />｜</li>
      <li><font-awesome-icon :icon="faHeart" />｜</li>
      <li>() <font-awesome-icon :icon="faShoppingBag" /></li>
    </ul>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      itemcount : 0,
      faMapMarkerAlt,
      faQuestionCircle,
      faUser,
      faHeart,
      faShoppingBag
    }
  },
}
</script>