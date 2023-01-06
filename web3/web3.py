import time
import nft_storage
from pprint import pprint
from nft_storage.api import nft_storage_api
from nft_storage.model.check_response import CheckResponse
from nft_storage.model.delete_response import DeleteResponse
from nft_storage.model.error_response import ErrorResponse
from nft_storage.model.forbidden_error_response import ForbiddenErrorResponse
from nft_storage.model.get_response import GetResponse
from nft_storage.model.list_response import ListResponse
from nft_storage.model.unauthorized_error_response import UnauthorizedErrorResponse
from nft_storage.model.upload_response import UploadResponse
# Defining the host is optional and defaults to https://api.nft.storage
# See configuration.py for a list of all supported configuration parameters.
configuration = nft_storage.Configuration(
    host = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdmOGRjNDA3RTgzMTk1MzFlQkUyMjRiMTZhMzlhMmJCNEUxQ2I1MjEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3Mjk5NDAzNTczNywibmFtZSI6IkV2ZW50IHRpY2tldHMgYm9va2luZyJ9.A_WXAuyikJzfFWVv6lrp5wiBTjmhS6eGMjYQYqYCrGk"
)
# Enter a context with an instance of the API client
with nft_storage.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = nft_storage_api.NFTStorageAPI(api_client)
    with open('pr.jpeg', 'rb') as f:
        body = f.read()
    try:
        # Check if a CID of an NFT is being stored by nft.storage.
        api_response = api_instance.store(body)
        pprint(api_response)
    except nft_storage.ApiException as e:
        print("Exception when calling NFTStorageAPI->store: %s\n" % e)