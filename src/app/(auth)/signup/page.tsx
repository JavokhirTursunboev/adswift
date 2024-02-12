
import dynamic from 'next/dynamic'
const DynamicSignUp = dynamic(()=>import("@/components/Register/signUp"),{
  loading: ()=> <p>Loading... </p>

})
export default function SignUp() {
  return (
    <div>
      <DynamicSignUp />
    </div>
  );
}
