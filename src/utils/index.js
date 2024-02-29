// This function is used to ADD MULTIPLE CLASSES instead of using the parentheses
// This function accepts the array of classnames
// filter is used with the Boolean because the Boolean will filter out all the falsy values so it can be an empty string, null or undefined and we're going to join each classname with a space

export const cx = (...classNames) => classNames.filter(Boolean).join(' ')