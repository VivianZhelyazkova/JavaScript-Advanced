function edit(ref, match, replacer) {
  let re = new RegExp(match, "g");

  ref.textContent = ref.textContent.replace(re, replacer);
}
