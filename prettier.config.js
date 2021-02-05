const isSendEnabled = Boolean(
  !loading &&
    ((message && message.length <= MAX_MESSAGE_LENGTH) ||
      (!message && imageSource)),
);
