import withGame from '../../hoc/withGame';
import ShowGame from './ShowGame';

const ShowGameContainer = withGame(ShowGame);
ShowGameContainer.displayName = 'ShowGameContainer';

export default ShowGameContainer;