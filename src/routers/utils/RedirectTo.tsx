import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export interface RedirectToProps {
  url: string;
}
export default function RedirectTo({ url }: RedirectToProps) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(url);
  }, [navigate, url]);

  return <></>;
}
