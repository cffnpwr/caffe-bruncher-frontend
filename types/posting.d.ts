interface MisskeyPostingContentProps {
  text: string;
  visiblity?: 'public' | 'home' | 'followers';
  cw?: string;
  localOnly?: boolean;
  fileIds?: string[];
  poll?: {
    choices: string[];
    multiple?: boolean;
    expiresAt?: number;
    expiredAfter?: number;
  };
}

interface TwitterPostingContentProps {
  text: string;
  mediaIds?: string[];
  poll?: {
    choices: string[];
    durationMin: number;
  };
}
