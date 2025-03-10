import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { SearchUserForm } from './search-user';
import { Anchor } from './anchor';

export function Header() {
  return (
    <header className="h-20 border-b-1 gap-4 border-gray-soft md:flex hidden" data-testid="header-component">
      <SearchUserForm />
      <Anchor className="flex items-center gap-2 p-6 text-white bg-blue-primary" href="/favorites" data-testid="header-anchor">
        <FontAwesomeIcon icon={faHeartOutline} width={24} height={20} />
        <span className="text-sm font-medium">Favoritos</span>
      </Anchor>
    </header>
  );
}
