export const useContact = () => {
  const config = useRuntimeConfig()
  
  const contact = {
    // Remplacez ce numéro par votre vrai numéro WhatsApp au format international
    whatsapp: (config.public.whatsappNumber as string) || '+977-9860000000', // Exemple numéro Nepal
    email: (config.public.email as string) || 'hello@zamzamxp.com',
    company: (config.public.companyName as string) || 'ZamZam XP'
  }

  const getWhatsAppUrl = (message?: string) => {
    const defaultMessage = `Hi! I'm interested in your adventure experiences. Could you please provide more information?`
    const text = encodeURIComponent(message || defaultMessage)
    // Nettoyer le numéro pour WhatsApp (supprimer les tirets et espaces)
    const cleanNumber = contact.whatsapp.replace(/[\s-]/g, '')
    return `https://wa.me/${cleanNumber}?text=${text}`
  }

  return {
    contact,
    getWhatsAppUrl
  }
}