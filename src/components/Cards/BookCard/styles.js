import styled from 'styled-components'

export const Container = styled.section`
  max-width: 178px;
  width: 100%;
  min-height: 487px;
  height: auto;
`

export const Image = styled.img`
  margin-bottom: var(--spacing-1);
`

export const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: var(--spacing-2);
`

export const Title = styled.h2`
  font-size: var(--fontsize-large);
  font-family: var(--family-IBM);
  line-height: 24px;

  flex-grow: 1;
  height: auto;
`

export const HeartIcon = styled.span`
  color: ${(props) => (props.isLiked ? 'var(--red-700)' : 'var(--white)')};
  font-size: var(--fontsize-large);
  line-height: 24px;

  -webkit-text-stroke: 1px var(--black);
  cursor: pointer;

  :hover {
    font-size: var(--fontsize-extralarge);
  }
`

export const Text = styled.p`
  display: inline-block;
`

export const Author = styled(Text)`
  color: var(--purple-100);
`
