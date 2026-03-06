import sys
import traceback

try:
    from app.auth.auth_routes import router
    print("✓ Auth routes imported successfully")
except Exception as e:
    print(f"Error importing auth routes:")
    print(f"Error type: {type(e).__name__}")
    print(f"Error message: {e}")
    traceback.print_exc()
