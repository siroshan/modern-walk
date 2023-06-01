import { User, UserCog, LogOut, ShoppingCart, X } from 'lucide-react';
import { Button } from '../../components/Atoms/Button';
import { useUser } from '../../../context/user';
import { NavBar } from '../../components/Organisms/NavBar';
import { Logo } from '../../components/Molucules/Logo';
import { Popover } from '../../components/Organisms/Popover';
import { PopoverTrigger } from '../../components/Molucules/Popover/PopoverTrigger';
import { PopoverContent } from '../../components/Molucules/Popover/PopoverContent';
import { PopoverClose } from '../../components/Molucules/Popover/PopoverClose';
import { CartProductCard } from '../../components/Molucules/CartProductCard';
import { AlertDialog } from '../../components/Molucules/AlertDialog/AlertDialog';
import { AlertDialogTrigger } from '../../components/Molucules/AlertDialog/AlertDialogTrigger';
import { AlertDialogContent } from '../../components/Molucules/AlertDialog/AlertDialogContent';
import { AlertDialogHeader } from '../../components/Molucules/AlertDialog/AlertDialogHeader';
import { AlertDialogTitle } from '../../components/Molucules/AlertDialog/AlertDialogTitle';
import { AlertDialogDescription } from '../../components/Molucules/AlertDialog/AlertDialogDescription';
import { AlertDialogFooter } from '../../components/Molucules/AlertDialog/AlertDialogFooter';
import { AlertDialogCancel } from '../../components/Molucules/AlertDialog/AlertDialogCancel';
import { AlertDialogAction } from '../../components/Molucules/AlertDialog/AlertDialogAction';
import { useCart } from '../../../context/cart';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavBarTemplate = () => {
  const router = useRouter();
  const UserCTX = useUser();
  const { cartItems, clearCart } = useCart();

  const handleLogOut = () => {
    UserCTX.signOut();
    router.push('/signin');
  };
  return (
    <NavBar>
      <div className='relative h-16 w-full'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Logo title='Modern Walk' link='/' />
        </div>
        {!UserCTX.user ? (
          <div className='absolute left-[90%] top-1/2 -translate-x-[90%] -translate-y-1/2'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className='group mr-4 h-10 w-10 border-0 px-0'
                >
                  <ShoppingCart className='h-4 w-4 group-hover:fill-primary-hover group-focus:fill-primary-hover' />
                  <span className='sr-only'>Open User Cart</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent align='end' className='p-0 max-w-md'>
                <>
                  <div className='flex flex-row items-center justify-between p-2'>
                    <div className='p-2 font-bold'>Cart</div>
                    <PopoverClose>
                      <X className='h-6 w-6 stroke-gray-400' />
                    </PopoverClose>
                  </div>

                  <div>
                    {cartItems.length > 0 &&
                      cartItems.map((cartItem, i) => (
                        <CartProductCard
                          key={cartItem.product.id}
                          product={cartItem.product}
                        />
                      ))}
                    {cartItems.length === 0 && (
                      <div className='p-4 text-center'>Empty cart</div>
                    )}
                  </div>
                  <div className='rounded-b-2xl bg-background-elephant-contrast p-2'>
                    <div className='grid grid-cols-2 gap-4'>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant='dotted' size='sm'>
                            Clear
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Clear Cart</AlertDialogTitle>
                            <AlertDialogDescription>
                              All items in your cart will be removed! Please
                              confirm to proceed.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>
                              <Button
                                variant='danger'
                                className='border border-danger bg-transparent text-danger'
                              >
                                Cancel
                              </Button>
                            </AlertDialogCancel>
                            <AlertDialogAction>
                              <Button variant='dangerOutline' onClick={clearCart}>
                                Confirm
                              </Button>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                      <Button size='sm'>Checkout</Button>
                    </div>
                  </div>
                </>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className='group h-10 w-10 border-0 px-0'
                >
                  <User className='h-4 w-4 group-hover:fill-primary-hover group-focus:fill-primary-hover' />
                  <span className='sr-only'>Open User Menu</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent align='end' className='grid w-fit gap-2'>
                <Button variant='ghost' className='flex justify-start p-2'>
                  <UserCog className='mr-2 h-4 w-4' />
                  Profile
                </Button>
                <Button
                  variant='ghost'
                  className='flex justify-start p-2'
                  onClick={handleLogOut}
                >
                  <LogOut className='mr-2 h-4 w-4' />
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className='absolute left-[90%] top-1/2 -translate-x-[90%] -translate-y-1/2'>
            <Link href='/signin'>
              <Button>Sign In</Button>
            </Link>
          </div>
        )}
      </div>
    </NavBar>
  );
};

export default NavBarTemplate;
