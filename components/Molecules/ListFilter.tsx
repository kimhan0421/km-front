import { Button, FlexBox } from 'components/Atoms';

interface ListFilterProps {
  title: string;
  icon: JSX.Element;
}

export default function ListFilter({ title, icon }: ListFilterProps) {
  return (
    <FlexBox
      padding="0px 20px"
      lineHeight="40px"
      justifyContent="space-between"
      border="1px solid #dddddd"
    >
      {title}
      <Button>{icon}</Button>
    </FlexBox>
  );
}
