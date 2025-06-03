import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    OwnerChanged: event("0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c", "OwnerChanged(address,address)", {"oldOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    PoolCreated: event("0x783cca1c0412dd0d695e784568c96da2e9c22ff989357a2e8b1d9b2b4e6b7118", "PoolCreated(address,address,uint24,int24,address)", {"token0": indexed(p.address), "token1": indexed(p.address), "fee": indexed(p.uint24), "tickSpacing": p.int24, "pool": p.address}),
    tickSpacingEnabled: event("0x93926f04b2830653fffab3919d6db243ec44cee88e6171a1f9472722c83e8bfe", "tickSpacingEnabled(int24,bool)", {"tickSpacing": indexed(p.int24), "state": indexed(p.bool)}),
}

export const functions = {
    POOL_INIT_CODE_HASH: viewFun("0xdc6fd8ab", "POOL_INIT_CODE_HASH()", {}, p.bytes32),
    allPairs: viewFun("0x1e3dd18b", "allPairs(uint256)", {"_0": p.uint256}, p.address),
    allPairsLength: viewFun("0x574f2ba3", "allPairsLength()", {}, p.uint256),
    createPool: fun("0x7b4f9bb1", "createPool(address,address,int24)", {"tokenA": p.address, "tokenB": p.address, "tickSpacing": p.int24}, p.address),
    enableTickSpacing: fun("0xa5d1534f", "enableTickSpacing(int24,bool)", {"ts": p.int24, "state": p.bool}, ),
    enabledTickSpacing: viewFun("0x1521b415", "enabledTickSpacing(int24)", {"_0": p.int24}, p.bool),
    feeProtocol: viewFun("0x527eb4bc", "feeProtocol()", {}, p.uint8),
    getPool: viewFun("0x28af8d0b", "getPool(address,address,int24)", {"tokenA": p.address, "tokenB": p.address, "fee": p.int24}, p.address),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    parameters: viewFun("0x89035730", "parameters()", {}, {"factory": p.address, "token0": p.address, "token1": p.address, "fee": p.uint24, "tickSpacing": p.int24}),
    setFeeProtocol: fun("0xb613a141", "setFeeProtocol(uint8)", {"fee": p.uint8}, ),
    setOwner: fun("0x13af4035", "setOwner(address)", {"_owner": p.address}, ),
}

export class Contract extends ContractBase {

    POOL_INIT_CODE_HASH() {
        return this.eth_call(functions.POOL_INIT_CODE_HASH, {})
    }

    allPairs(_0: AllPairsParams["_0"]) {
        return this.eth_call(functions.allPairs, {_0})
    }

    allPairsLength() {
        return this.eth_call(functions.allPairsLength, {})
    }

    enabledTickSpacing(_0: EnabledTickSpacingParams["_0"]) {
        return this.eth_call(functions.enabledTickSpacing, {_0})
    }

    feeProtocol() {
        return this.eth_call(functions.feeProtocol, {})
    }

    getPool(tokenA: GetPoolParams["tokenA"], tokenB: GetPoolParams["tokenB"], fee: GetPoolParams["fee"]) {
        return this.eth_call(functions.getPool, {tokenA, tokenB, fee})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    parameters() {
        return this.eth_call(functions.parameters, {})
    }
}

/// Event types
export type OwnerChangedEventArgs = EParams<typeof events.OwnerChanged>
export type PoolCreatedEventArgs = EParams<typeof events.PoolCreated>
export type TickSpacingEnabledEventArgs = EParams<typeof events.tickSpacingEnabled>

/// Function types
export type POOL_INIT_CODE_HASHParams = FunctionArguments<typeof functions.POOL_INIT_CODE_HASH>
export type POOL_INIT_CODE_HASHReturn = FunctionReturn<typeof functions.POOL_INIT_CODE_HASH>

export type AllPairsParams = FunctionArguments<typeof functions.allPairs>
export type AllPairsReturn = FunctionReturn<typeof functions.allPairs>

export type AllPairsLengthParams = FunctionArguments<typeof functions.allPairsLength>
export type AllPairsLengthReturn = FunctionReturn<typeof functions.allPairsLength>

export type CreatePoolParams = FunctionArguments<typeof functions.createPool>
export type CreatePoolReturn = FunctionReturn<typeof functions.createPool>

export type EnableTickSpacingParams = FunctionArguments<typeof functions.enableTickSpacing>
export type EnableTickSpacingReturn = FunctionReturn<typeof functions.enableTickSpacing>

export type EnabledTickSpacingParams = FunctionArguments<typeof functions.enabledTickSpacing>
export type EnabledTickSpacingReturn = FunctionReturn<typeof functions.enabledTickSpacing>

export type FeeProtocolParams = FunctionArguments<typeof functions.feeProtocol>
export type FeeProtocolReturn = FunctionReturn<typeof functions.feeProtocol>

export type GetPoolParams = FunctionArguments<typeof functions.getPool>
export type GetPoolReturn = FunctionReturn<typeof functions.getPool>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type ParametersParams = FunctionArguments<typeof functions.parameters>
export type ParametersReturn = FunctionReturn<typeof functions.parameters>

export type SetFeeProtocolParams = FunctionArguments<typeof functions.setFeeProtocol>
export type SetFeeProtocolReturn = FunctionReturn<typeof functions.setFeeProtocol>

export type SetOwnerParams = FunctionArguments<typeof functions.setOwner>
export type SetOwnerReturn = FunctionReturn<typeof functions.setOwner>

