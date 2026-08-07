// Shared site constants. Addresses and contact details appear in the contact
// band, the footer and several page sections — keeping one copy avoids them
// drifting apart.

export const CONTACT = {
  name: 'Toby Goodman',
  email: 'toby@muddyflattspolo.com',
  phone: '0410 005 954',
  phoneHref: 'tel:+61410005954',
}

export const LOCATIONS = [
  {
    id: 'MuddyFlatts',
    name: 'Muddy Flatts Richmond',
    address: '3 Triangle Lane, Richmond NSW 2753',
    distance: 'Just 1 hour from Sydney CBD',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8!2d150.7!3d-33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3%20Triangle%20Lane%2C%20Richmond%20NSW%202753!5e0!3m2!1sen!2sau!4v1234567890',
  },
  {
    id: 'TarloHill',
    name: 'Tarlo Hill',
    address: '2195 Taralga Road, Tarlo NSW 2580',
    distance: '2.5 hours from Sydney',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8!2d149.5!3d-34.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2195%20Taralga%20Road%2C%20Tarlo%20NSW%202580!5e0!3m2!1sen!2sau!4v1234567890',
  },
]

// Figma is inconsistent here: the Home nav reads "Our Heritage" while the
// isolated Header component and the footer read "History". Normalised to
// "Our Heritage" to match the page frame's own name.
export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Muddy Flatts', to: '/muddy-flatts' },
  { label: 'Tarlo Hill', to: '/tarlo-hill' },
  { label: 'About', to: '/about' },
  { label: 'Our Heritage', to: '/our-heritage' },
]
