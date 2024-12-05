
from rest_framework.routers import DefaultRouter
from .views import AlbunesView

router = DefaultRouter()
router.register(r'apitracks', AlbunesView, basename='album')

urlpatterns = router.urls  
