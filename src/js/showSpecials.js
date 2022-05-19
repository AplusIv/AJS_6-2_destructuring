export default function showSpecials({ special: [...rest] }) {
  const specialsResult = [];
  for (const special of rest) {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = special;
    specialsResult.push({
      id,
      name,
      icon,
      description,
    });
  }
  return specialsResult;
}
