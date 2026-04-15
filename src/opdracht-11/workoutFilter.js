/**
 * TDD Opdracht: Workout Filter
 * 
 * Filter en sorteer workouts
 * Run: npm test opdracht-11
 */

/**
 * Geeft workouts met minimaal X reps
 */
export function filterByMinReps(workouts, minReps) {
  // TODO: Filter workouts waar reps >= minReps
  // Hint: gebruik .filter()
  return workouts.filter((workout) => workout.reps >= minReps);
}

/**
 * Geeft workouts met maximaal X load
 */
export function filterByMaxLoad(workouts, maxLoad) {
  // TODO: Filter workouts waar load <= maxLoad
  if (maxLoad === 0) {
    return [];
  }
  return workouts.filter((workout) => workout.load <= maxLoad);
}

/**
 * Sorteert workouts op reps (laag naar hoog)
 */
export function sortByReps(workouts) {
  // TODO: 
  // 1. Maak kopie van array (gebruik [...workouts])
  // 2. Sorteer op reps
  // 3. Return gesorteerde array
  // Hint: .sort((a, b) => a.reps - b.reps)
  return [...workouts].sort((a, b) => a.reps - b.reps);
}

/**
 * Geeft alleen "high intensity" workouts (load >= 50)
 */
export function getHighIntensityWorkouts(workouts) {
  // TODO: Filter workouts waar load >= 50
  return workouts.filter((workout) => workout.load >= 50);
}
