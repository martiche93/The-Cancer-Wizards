# Dependencies
from chembl_webresource_client import *

# Create Resource Object
compounds = CompoundResource()

# Check webservice status
print (compounds.status())
