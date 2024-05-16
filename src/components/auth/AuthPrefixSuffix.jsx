export function AuthPrefix({ label ,suffix,fontSize}) {

  return <p className={`${fontSize?fontSize:'text-[13px]'} xl:text-center text-black`}>{label} {suffix}</p>
}

export function AuthSuffix ({ label,fontSize, onPress }) {
 
  return <p onClick={onPress} className={`${fontSize?fontSize:'text-[13px]'} xl:text-center cursor-pointer text-secondaryColor`} >{label} </p>
}
