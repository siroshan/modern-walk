import { FC } from 'react';
import { LogoProps } from './Logo.type';
import { Typography } from '../../Atoms/Typography';
import Link from 'next/link';

const Logo: FC<LogoProps> = ({ title, link }) => {
  return (
    <div className='px-4 py-2 text-center'>
      <Link href={link} className='text-inherit no-underline'>
        <Typography variant='h1' className='text-center'>{title}</Typography>
      </Link>
    </div>
  );
};

export default Logo;
