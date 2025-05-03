import { Button } from '@/components/ui/button';

export default function SocialLoginButtons() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Button 
        variant="outline" 
        className="h-11 w-full transition-all hover:bg-muted/50"
        onClick={() => console.log('Google login')}
      >
        <GoogleIcon className="h-5 w-5" />
        <span className="sr-only">Google</span>
      </Button>
      <Button 
        variant="outline" 
        className="h-11 w-full transition-all hover:bg-muted/50"
        onClick={() => console.log('Microsoft login')}
      >
        <MicrosoftIcon className="h-5 w-5" />
        <span className="sr-only">Microsoft</span>
      </Button>
      <Button 
        variant="outline" 
        className="h-11 w-full transition-all hover:bg-muted/50"
        onClick={() => console.log('Apple login')}
      >
        <AppleIcon className="h-5 w-5" />
        <span className="sr-only">Apple</span>
      </Button>
    </div>
  );
}

// Social media icons
function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function MicrosoftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 23 23" {...props}>
      <path fill="#f1511b" d="M11.5 0h-11v11h11z" />
      <path fill="#80cc28" d="M23 0h-11v11h11z" />
      <path fill="#00adef" d="M11.5 11.5h-11v11h11z" />
      <path fill="#fbbc09" d="M23 11.5h-11v11h11z" />
    </svg>
  );
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
    </svg>
  );
}