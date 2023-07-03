import { Text } from 'components/primitives';
import { HStack } from 'lib/ui/Stack';
import styles from './UpdateAssetsWhitelistAction.module.sass';
import { useCurrentProposalAction } from 'dao/components/CurrentProposalActionProvider';
import { enterprise } from 'types/contracts';
import { Address } from 'chain/components/Address';

export const UpdateNFTsWhitelistAction = () => {
  const { msg } = useCurrentProposalAction();

  return (
    <div className={styles.root}>
      {Object.entries(msg as enterprise.UpdateNftWhitelistMsg).map(([action, nfts]) => {
        if (!nfts.length) return null;

        return (
          <div key={action} className={styles.section}>
            <Text variant="heading4">Whitelisted NFTs to {action}</Text>
            <HStack gap={16} wrap="wrap">
              {(nfts as string[]).map((nft) => (
                <Address length="full" value={nft} />
              ))}
            </HStack>
          </div>
        );
      })}
    </div>
  );
};
