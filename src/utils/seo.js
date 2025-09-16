// SEO utility functions

export const generateMetaTags = (title, description, image, url) => {
  return {
    title: title || 'Modern E-Commerce Store',
    description: description || 'Discover amazing products at great prices',
    image: image || '/og-image.jpg',
    url: url || window.location.href,
  }
}

export const updatePageTitle = title => {
  document.title = title ? `${title} | Modern Store` : 'Modern Store'
}

export const updateMetaDescription = description => {
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    document.head.appendChild(metaDescription)
  }
  metaDescription.content = description
}
