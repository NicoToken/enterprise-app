import { Tag } from 'components/tag';
import classNames from 'classnames';
import { Stack } from 'lib/ui/Stack';
import { useBlockHeightQuery } from 'queries';
import styles from './ProposalTags.module.sass';
import { getProposalStatusName, getProposalTypeName } from 'dao/shared/proposal';
import { Proposal } from 'dao/shared/proposal';

interface ProposalStatusProps {
  className?: string;
  proposal: Proposal;
}

export const ProposalTags = (props: ProposalStatusProps) => {
  const { className, proposal } = props;

  const { data: blockHeight = Number.MAX_SAFE_INTEGER } = useBlockHeightQuery();

  const status = getProposalStatusName(proposal, blockHeight);

  const proposalTypeName = getProposalTypeName(proposal);

  return (
    <Stack direction="row" className={classNames(className, styles.root)}>
      <Tag className={classNames(styles.status, styles[status.toLowerCase()])}>{status}</Tag>
      <Tag className={classNames(styles.type, styles[proposalTypeName.toLowerCase()])}>{proposalTypeName}</Tag>
      {proposal.type === 'council' && <Tag className={styles.emergency}>Emergency</Tag>}
    </Stack>
  );
};
