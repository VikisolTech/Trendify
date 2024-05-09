export function AuthPrefix({ label ,suffix}) {
  return <p className="text-[13px] text-black ">{label} {suffix}</p>
}

export function AuthSuffix({ label }) {
  return <p className="text-[13px] text-secondaryColor">{label}</p>
}
