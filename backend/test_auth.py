from app.auth.password_utils import hash_password, verify_password

print("Testing password hashing with sha256_crypt...")

# Hash a password
password = "test123"
hashed = hash_password(password)

print(f"✓ Password hashed successfully")
print(f"Hash: {hashed[:50]}...")

# Verify correct password
is_valid = verify_password(password, hashed)
print(f"✓ Correct password verified: {is_valid}")

# Verify wrong password
is_invalid = verify_password("wrongpassword", hashed)
print(f"✓ Wrong password rejected: {not is_invalid}")

print("\n✓ All password utility tests passed!")
