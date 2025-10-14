import { APP_CONFIG } from "~/config/constants";

export const useContact = () => {
  const contact = {
    whatsapp: APP_CONFIG.company.whatsapp,
    email: APP_CONFIG.company.email,
    company: APP_CONFIG.company.name,
  };

  const getWhatsAppUrl = (message?: string) => {
    const defaultMessage = `Hi! I'm interested in your adventure experiences. Could you please provide more information?`;
    const text = encodeURIComponent(message || defaultMessage);
    // Nettoyer le numéro pour WhatsApp (supprimer les tirets et espaces)
    const cleanNumber = contact.whatsapp.replace(/[\s-]/g, "");
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  return {
    contact,
    getWhatsAppUrl,
  };
};
