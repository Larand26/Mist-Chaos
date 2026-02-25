class Spawner {
  constructor() {
    this.spawnPoints = [];
  }

  spawn(EntityClass, x, y, ...args) {
    return new EntityClass(x, y, ...args);
  }

  addSpawnPoint(x, y) {
    this.spawnPoints.push({ x, y });
  }

  spawnAt(EntityClass, index, ...args) {
    const point = this.spawnPoints[index];
    return this.spawn(EntityClass, point.x, point.y, ...args);
  }

  spawnMultiple(EntityClass, count, x, canvasHeight, ...args) {
    const entities = [];
    const spacing = canvasHeight / (count + 1);

    for (let i = 0; i < count; i++) {
      const y = spacing * (i + 1) - 25;
      const entity = this.spawn(EntityClass, x, y, ...args);
      entities.push(entity);
    }

    return entities;
  }

  async spawnMultipleWithDelay(
    EntityClass,
    count,
    x,
    canvasHeight,
    delayMs,
    onSpawn,
    ...args
  ) {
    const spacing = canvasHeight / (count + 1);

    for (let i = 0; i < count; i++) {
      const y = Math.floor(Math.random() * (canvasHeight - 50)); // Posição Y aleatória dentro do canvas
      const entity = this.spawn(EntityClass, x, y, ...args);

      if (onSpawn) {
        onSpawn(entity);
      }

      if (i < count - 1) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  }
}

export default Spawner;
