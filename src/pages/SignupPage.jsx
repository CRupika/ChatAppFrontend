import SlackLogo from "../components/ui/SlackLogo";
// import SignupForm from "../components/auth/SignupForm";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';


const SignupPage = () => {
  return (
    <>
      <div className="flex min-h-full flex-col items-center bg-[rgba(var(--sk_primary_background),1)]">
        <header className="grid w-full grid-cols-3 items-center px-0 py-12 pb-10"><div class="left-col"></div>
          <div className="text-center">
            <a target="_self" className="c-link" href="https://slack.com" rel="noopener noreferrer">
              <img alt="Slack" height="26" title="Slack" src="https://a.slack-edge.com/bv1-13/slack_logo-e971fd7.svg" />
            </a>
          </div>
          <div className="right-col"></div>
        </header>
        {/* <div className="flex w-full max-w-[800px] flex-col flex-1 shrink-0 items-center">

        </div> */}
        <div className="flex w-full max-w-[800px] flex-col flex-1 shrink-0 items-center">
          <h1 className="mt-5 max-w-[700px] text-center text-[48px] font-bold leading-[46px] tracking-[-0.75px] text-black ">
            First, enter your email
          </h1>
          <div className="p-refreshed_page__sub_heading">
            We suggest using the <b>email address you use at work.</b>
          </div>
          <form novalidate="" className="w-full max-w-[400px] mx-auto px-4">
            <label
              aria-hidden="true"
              id="creator_signup_label"
              for="creator_signup_email"
              className="absolute m-0 block h-[1px] w-[1px] cursor-pointer overflow-hidden border-0 p-0 text-[15px] font-bold leading-[1.46667] [clip-path:inset(50%)] select-none [user-select:none] [-webkit-user-select:none]"
              data-qa-label="true"
              data-qa-label-type="block"
            >
              <span
                class="c-label__text"
                data-qa-label-text="true">
                Email address
              </span>
            </label>
            <div style={{ marginBottom: '20px' }}>
              <InputText value={""} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Button label="Help" severity="help" size="large" style={{ width: '277px', height: '52px' }} />
            </div>
          </form>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '28%' }}>
              <hr style={{ width: '30%' }} />
              <span >OR</span>
              <hr style={{ width: '30%' }} />
            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
