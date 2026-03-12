from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def login(request):
  """
  Placeholder login endpoint.

  When authentication is implemented, this view can:
  - Validate user credentials.
  - Issue a session cookie or JWT access/refresh tokens.
  """
  return Response({"detail": "Login not implemented"}, status=status.HTTP_501_NOT_IMPLEMENTED)


@api_view(["POST"])
def logout(request):
  """
  Placeholder logout endpoint.

  For session-based auth, this would clear the session.
  For JWT-based auth, this could blacklist/revoke tokens (if used).
  """
  return Response({"detail": "Logout not implemented"}, status=status.HTTP_501_NOT_IMPLEMENTED)


@api_view(["POST"])
def refresh_token(request):
  """
  Placeholder token refresh endpoint for JWT-style flows.
  """
  return Response({"detail": "Token refresh not implemented"}, status=status.HTTP_501_NOT_IMPLEMENTED)

