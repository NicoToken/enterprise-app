import { getValueProviderSetup } from '@terra-money/apps/utils';
import { Throbber } from 'components/primitives';
import { useCurrentDaoNftWhitelistQuery } from 'queries/useCurrentDaoNftWhitelistQuery';

interface Props {
  children: React.ReactNode;
}

const { provider: WhitelistedNFTsProvider, useValue: useCurrentDaoWhitelistedNFTs } =
  getValueProviderSetup<string[]>('WhitelistedNFTs');

export { useCurrentDaoWhitelistedNFTs };

export const CurrentDAOWhitelistedNFTsProvider = ({ children }: Props) => {
  const { data: whitelistedNFTs } = useCurrentDaoNftWhitelistQuery();

  if (!whitelistedNFTs) {
    return <Throbber />;
  }

  return <WhitelistedNFTsProvider value={whitelistedNFTs}>{children}</WhitelistedNFTsProvider>;
};
