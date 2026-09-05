import SignOutButton from "../components/auth/sign-out-button";

export default function UserSettings() {
  return (
    <div className="flex justify-center">
      <div className="mt-30 w-80 text-center" id="settings-div">
        <h2 className="text-2xl font-bold">Your settings</h2>

        <SignOutButton/>
      </div>
    </div>
  );
}
