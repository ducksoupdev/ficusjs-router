import { html, createComponent } from '../util/component.js'
import { router } from './router.js'

import './views/home-page.js'
import './views/page-one.js'
import './views/page-error.js'
import './views/page-not-found.js'

createComponent('mock-routed-app', {
  render () {
    return html`<div>
<nav>
  <button type="button" @click="${e => this.navigateTo(e, router)}" data-href="/" class="active">Home</button>
  <button type="button" @click="${e => this.navigateTo(e, router)}" data-href="/one">Page one</button>
  <button type="button" @click="${e => this.navigateTo(e, router)}" data-href="/cancelled">Cancelled</button>
  <button type="button" @click="${e => this.navigateTo(e, router)}" data-href="/error">Error</button>
</nav>
<div id="router-outlet"></div>
</div>`
  }
})
