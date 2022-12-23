import CRLNodes from './RichLabelNodes/CRLNodes';
import URLNodes from './RichLabelNodes/URLNodes';
import SRLNodes from './RichLabelNodes/SRLNodes';
import TRLNodes from './RichLabelNodes/TRLNodes';
import ExportNode from './ExportNode/ExportNode';

export default [...CRLNodes, ...URLNodes, ...SRLNodes, ...TRLNodes, ExportNode];
