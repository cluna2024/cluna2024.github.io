createChat({
    webhookUrl: 'https://agente3.app.n8n.cloud/webhook/139c64b0-449a-4ea1-957b-c43b7eece9b4/chat',
    target: '#n8n-chat',
    mode: 'full', // Modo completo
    initialMessages: [
      '¡Hola! 👋',
      'Bienvenido al chat de soporte. ¿En qué puedo ayudarte hoy?'
    ],
    i18n: {
      en: {
        title: 'Soporte de E3',
        subtitle: "Estamos aquí para ayudarte 24/7.",
        footer: 'Powered by n8n',
        getStarted: 'Nueva Conversación',
        inputPlaceholder: 'Escribe tu mensaje...',
      },
    },
  });