/**
 * TDD Opdracht: Workout Duration Calculator
 * 
 * Bereken statistieken over workouts
 * Run: npm test opdracht-10
 */

/**
 * Telt totaal aantal reps op
 */
export function calculateTotalReps(workouts) {
  // TODO: Tel alle reps bij elkaar op
  // Hint: gebruik reduce()
  return workouts.reduce((total, workout) => total + workout.reps, 0);
}

/**
 * Telt totale load/gewicht op
 */
export function calculateTotalLoad(workouts) {
  // TODO: Tel alle load bij elkaar op
  return workouts.reduce((total, workout) => total + workout.load, 0);
}

/**
 * Schat duur van workout in minuten
 * Aanname: 3 seconden per rep
 */
export function estimateDuration(workouts) {
  // TODO: 
  // 1. Tel totale reps
  // 2. Vermenigvuldig met 3 (seconden per rep)
  // 3. Deel door 60 (seconden naar minuten)
  // 4. Rond af op 2 decimalen
  // Hint: Math.round(getal * 100) / 100
  const totalReps = calculateTotalReps(workouts);
  const durationInSeconds = totalReps * 3;
  const durationInMinutes = durationInSeconds / 60;
  return Math.round(durationInMinutes * 100) / 100;
}

/**
 * Berekent totaal volume (reps × load)
 * Volume = maat voor trainingsintensiteit
 */
export function getTotalVolume(workouts) {
  // TODO: 
  // Voor elke workout: reps × load
  // Tel alle volumes bij elkaar op
  // Squats: 10 reps × 50 kg = 500
  // Push ups: 20 reps × 0 kg = 0
  // Totaal: 500
  return workouts.reduce((total, workout) => total + (workout.reps * workout.load), 0);
}
