import test from 'ava'

import { highlight } from '../src/filters'

test('empty query returns verbatim content', t => {
  let highlighted = highlight('camarade', '')

  t.is(highlighted, 'camarade')
})

test('query returns node text with highlight', t => {
  let highlighted = highlight('camarade', 'ad')

  t.is(highlighted, 'camar<span class="highlight">ad</span>e')
})
