export function AuthPrefix({ label ,suffix}) {
  return <p className="text-[13px] xl:text-center text-black ">{label} {suffix}</p>
}

export function AuthSuffix({ label }) {
  return <p className="text-[13px] xl:text-center text-secondaryColor">{label}</p>
}
