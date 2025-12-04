import * as admin from "firebase-admin";
import {Request} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Initialize Firebase Admin SDK if not already initialized
if (admin.apps.length === 0) {
  admin.initializeApp();
}

/**
 * Verify App Check token from request header
 * @param {Request} request HTTP request
 * @return {Promise<boolean>} True if token is valid, false otherwise
 */
export async function verifyAppCheckToken(request: Request): Promise<boolean> {
  const appCheckToken = request.header("X-Firebase-AppCheck");

  if (!appCheckToken) {
    logger.warn("No App Check token provided");
    return false;
  }

  try {
    await admin.appCheck().verifyToken(appCheckToken);
    logger.info("App Check token verified successfully");
    return true;
  } catch (error) {
    logger.error("App Check token verification failed", {error});
    return false;
  }
}

/**
 * Middleware-style handler that verifies App Check
 * and returns 401 if invalid
 * @param {Request} request HTTP request
 * @param {object} response HTTP response
 * @return {Promise<boolean>} True to reject request, false to continue
 */
// eslint-disable-next-line require-jsdoc, @typescript-eslint/no-explicit-any
export async function requireAppCheck(
  request: Request,
  response: any
): Promise<boolean> {
  const isValid = await verifyAppCheckToken(request);

  if (!isValid) {
    response.status(401).json({
      success: false,
      error: "Unauthorized: Invalid or missing App Check token",
    });
    return true; // Request should be rejected
  }

  return false; // Continue processing
}
